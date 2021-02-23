Database:
{
    users: {
        userId:
        firstName:
        lastName:
        userName:
        email:
        password:
        phoneNumber:
        address: { city , street , houseNumber},
        role:  (select-option: 'manager' , 'teacher' , 'student')        
    }

    student: {
        userId:
        grade: [filter by UI dependent role]
    }

    subjectToTeacher: {
        userId:
        subjectId:
    }

    subject: {
        subjectId:
        subjectName:
    }

    lessons: {
        lessonId:
        subject:
        grade:
        teacher: userId
        day:
        order:
        url:
        subjectId:
    }

    material: {
        lessonId:
        date:
        summaryFile:
        video:
        homeWork: 
    }
}