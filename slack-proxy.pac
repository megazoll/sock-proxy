function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-msgs.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS cksoh.teletype.live:1080; DIRECT";
    }

    return "DIRECT";
}
