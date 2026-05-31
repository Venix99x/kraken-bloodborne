window.nzxt = {
    v1: {
        onMonitoringDataUpdate: (data) => {

            const cpu =
                Math.round(data.cpus?.[0]?.temperature ?? 0);

            const gpu =
                Math.round(data.gpus?.[0]?.temperature ?? 0);

            let liquid = "--";

            if (data.kraken?.liquidTemperature) {
                liquid = Math.round(data.kraken.liquidTemperature);
            }

            document.getElementById("cpuTemp").innerText =
                `${cpu}°`;

            document.getElementById("gpuTemp").innerText =
                `${gpu}°`;

            document.getElementById("liqTemp").innerText =
                `${liquid}°`;
        }
    }
};
