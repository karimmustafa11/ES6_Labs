function courseInfo(course = {}) {
    var defaultCourse = {
        courseName: "ES6",
        courseDuration: "3 days",
        courseOwner: "JavaScript"
    };

    var allowedKeys = Object.keys(defaultCourse);
    for (let key in course) {
        if (!allowedKeys.includes(key)) {
            throw new Error(`Invalid property: ${key}`);
        }
    }
    var finalCourse = Object.assign({}, defaultCourse, course)

    for (let key in finalCourse) {
        if (finalCourse[key] === null || finalCourse[key] === undefined) {
            finalCourse[key] = defaultCourse[key]
        }
    }

    console.log(`Course Name: ${finalCourse.courseName}`)
    console.log(`Course Duration: ${finalCourse.courseDuration}`)
    console.log(`Course Owner: ${finalCourse.courseOwner}`)
    console.log("------------")
}

courseInfo({ courseName: "React", courseDuration: "5 days", courseOwner: "React" })
courseInfo({ courseName: "Node.js" })
courseInfo()
courseInfo({ courseName: null, courseDuration: undefined, courseOwner: "C++" })
courseInfo({ courseName: "Angular", Duration: "10 days" })
