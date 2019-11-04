function buildGraph(list) {
    let graph = {};
    list.forEach((prereq) => {
        let [course, pre] = prereq.map(String);
        if (course in graph) {
            graph[course].push(pre);
        } else {
            graph[course] = [pre];
        }

        if (!(pre in graph)) {
            graph[pre] = []
        }
    });

    return graph;
}

var canFinish = function (numCourses, prerequisites) {
    let prereq = buildGraph(prerequisites);
    let totalCourses = Object.keys(prereq).length;
    let passed = new Set();

    let eligible = true;
    while (eligible) {
        eligible = false;

        for (let course in prereq) {
            let prereqsMet = prereq[course].every((pre) => passed.has(pre));
            if (!passed.has(course) && prereqsMet) {
                passed.add(course);
                eligible = true
            }
        }
    }

    return passed.size === totalCourses
};