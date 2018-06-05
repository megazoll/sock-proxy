function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-msgs.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 95.110.227.5:51137; DIRECT";
    }
    if (shExpMatch(host, "2ip.ru")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 95.110.227.5:51137; DIRECT";
    }

    return "DIRECT";
}
