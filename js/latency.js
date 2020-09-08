function sleep_ms(millisecs) {
    var initiation = new Date().getTime();
    while ((new Date().getTime() - initiation) < millisecs);
}

function latency() {
    var start = new Date().getTime();
    sleep_ms(0.1);
    var end = new Date().getTime();
    console.log("%d ms", end - start);
}

latency()