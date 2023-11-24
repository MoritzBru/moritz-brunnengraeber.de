function initUserTimings() {
    if (window.performance) {
        window.mbPerformance = {};
        const allPerfMarks = window.performance.getEntriesByType('mark');
        const allPerfMeasures = window.performance.getEntriesByType('measure');
        window.mbPerformance.marks = allPerfMarks.map((m) => ({ name: m.name, time: m.startTime }));
        window.mbPerformance.measures = allPerfMeasures.map((m) => ({ name: m.name, duration: m.duration }));
        // console.table(allPerfMarks, ['name', 'startTime']);
        // console.table(allPerfMeasures, ['name', 'duration']);
    }
}

export default initUserTimings;
