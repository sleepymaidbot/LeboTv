# LeboTV — Infrastructure Setup

This document describes what to add to your NixOS machine and Docker Compose to run the full LeboTV media stack.

---

## 1. Reverse Proxy (Traefik / Caddy / Nginx)

Your services are exposed at `svip.sytes.net`. You need a reverse proxy to route subpaths to the correct containers.

### Option A: Traefik (recommended with Docker)

Add to your NixOS config or run Traefik in Docker:

```nix
# In your NixOS configuration
services.traefik = {
  enable = true;
  staticConfigOptions = ''
    [entryPoints.web]
      address = ":80"
    [entryPoints.websecure]
      address = ":443"
  '';
  dynamicConfigOptions = ''
    [http.routers.radarr]
      rule = "Host(`svip.sytes.net`) && PathPrefix(`/radarr`)"
      service = "radarr"
    [http.services.radarr.loadBalancer.servers]
      url = "http://localhost:7878"
    # ... repeat for each service
  '';
};
```

Or use Traefik labels in Docker Compose (see `docker-compose.traefik.yml` example below).

### Option B: Caddy

```nix
services.caddy = {
  enable = true;
  virtualHosts."svip.sytes.net" = {
    extraConfig = ''
      reverse_proxy /radarr localhost:7878
      reverse_proxy /sonarr localhost:8989
      reverse_proxy /lidarr localhost:8686
      reverse_proxy /emby localhost:8096
      reverse_proxy /jellyfin localhost:8096
      reverse_proxy /navidrome localhost:4533
      reverse_proxy /qbittorrent localhost:8080
      reverse_proxy /prowlarr localhost:9696
    '';
  };
};
```

### Option C: Nginx

```nix
services.nginx = {
  enable = true;
  virtualHosts."svip.sytes.net" = {
    locations."/radarr/" = {
      proxyPass = "http://127.0.0.1:7878/";
      extraConfig = "proxy_set_header Host $host;";
    };
    # ... repeat for each service
  };
};
```

---

## 2. Docker on NixOS

If you run the stack in Docker on NixOS:

```nix
virtualisation.docker = {
  enable = true;
  autoPrune.enable = true;
};
```

Or with Docker Compose:

```nix
virtualisation.docker.enable = true;
environment.systemPackages = [ pkgs.docker-compose ];
```

---

## 3. Storage Paths

Create and set permissions for media directories:

```bash
sudo mkdir -p /data/media/{movies,tv,music,downloads}
sudo chown -R 1000:1000 /data/media
```

Update `docker-compose.yml` with your actual paths (e.g. `/data/media/movies`).

---

## 4. LeboTV Static Site (this repo)

To serve the LeboTV homepage:

### Option A: Nginx static site

```nix
services.nginx.virtualHosts."svip.sytes.net" = {
  root = "/path/to/LeboTv";  # or your deployment path
  locations."/" = {
    tryFiles = "$uri $uri/ /index.html";
  };
  locations."/radarr/" = { ... };  # proxy to radarr
  # ...
};
```

### Option B: Caddy file_server

```caddy
svip.sytes.net {
  root * /path/to/LeboTv
  file_server
  # reverse_proxy for each service...
}
```

### Option C: Deploy to same server

Copy `index.html`, `services.json`, and `assets/` to your web root. The page fetches `services.json` at load time.

---

## 5. Optional: HTTPS with Let's Encrypt

With Caddy, HTTPS is automatic. With NixOS + Nginx:

```nix
security.acme.acceptTerms = true;
security.acme.defaults.email = "your@email.com";
services.nginx.virtualHosts."svip.sytes.net" = {
  forceSSL = true;
  enableACME = true;
  # ...
};
```

---

## 6. Checklist

- [ ] Reverse proxy configured for all service paths
- [ ] Docker / Docker Compose running
- [ ] Media paths created and mounted
- [ ] Prowlarr → Radarr/Sonarr/Lidarr indexers configured
- [ ] qBittorrent added as download client in *arr apps
- [ ] LeboTV static files deployed and served at root
- [ ] `services.json` baseUrl matches your domain

---

## 7. Service Ports Reference

| Service    | Port | Path        |
|------------|------|-------------|
| Prowlarr   | 9696 | / (root)    |
| Radarr     | 7878 | /radarr     |
| Sonarr     | 8989 | /sonarr     |
| Lidarr     | 8686 | /lidarr     |
| qBittorrent| 8080 | :8080       |
| Jellyfin   | 8096 | /jellyfin   |
| Navidrome  | 4533 | /navidrome  |
| Emby       | 8096 | /emby       |
