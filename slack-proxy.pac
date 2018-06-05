function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-msgs.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 50p4c1fj.cpt.vs-net-2.us:443; DIRECT";
    }
    if (shExpMatch(host, "2ip.ru")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 50p4c1fj.cpt.vs-net-2.us:443; DIRECT";
    }

    return "DIRECT";
}
