```JS

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
        role:  (select-option:'manager','teacher','student')        
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

```
```JS

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
        role: (select-option:'manager','teacher','student')       
    } 

    studentToClass: {
        userId:
        classId:– הקבצות
    }

    class: {
        classId:
        className:
        level:
        grade:
    }

    subjectToTeacher: {
        userId:
        subjectId:
    }

    subjectToTeacherToClass: {
        subjectToTeacherToClassId:
        subjectToTeacher:fk
        classId:fk
    } 

    subject: {
        subjectId:
        subjectName:
    }

    lessons: {
        lessonId:
        lessonName:
        subjectToTeacherToClassId:fk
        date:
        order:
        url:
    }

    material: {
        lessonId:
        //date:
        summaryFile:
        video:
        homeWork:
    }
}



```

                                                        כיתה א1
           
                ראשון           שני            שלישי                   רביעי              חמישי                שישי     

            מתמתיקה/לוי     הבעה/גומבו     מתמתיקה/לוי           יהדות/אונגר          הבעה/גומבו           יהדות/אונגר         
            אנגלית/שיף      אנגלית/שיף      אנגלית/שיף          מחשבים/אלבום         לשון/אונגר             דינים/ברון
            מדעים/הולס      דינים/ברון      מדעים/הולס        סטטיסטיקה/אלתר       מחשבים/אלבום             נביא/אונגר        
                                    הבעה/גומבו      מתמתיקה/לוי      הבעה/גומבו            דינים/ברון       היסטוריה/זקש
                                    דקדוק/כהן        דקדוק/כהן       דקדוק/כהן            הבעה/גומבו       היסטוריה/זקש
                                    דינים/ברון      מדעים/הולס       דינים/ברון           מדעים/הולס           דקדוק/כהן        
                                    סטטיסטיקה/אלתר

                                    

                                    

                                                          2כיתה ג
           
                ראשון           שני            שלישי                   רביעי              חמישי                שישי     

            מתמתיקה/לוי     הבעה/גומבו     מתמתיקה/לוי           יהדות/אונגר          הבעה/גומבו           יהדות/אונגר         
            אנגלית/שיף      אנגלית/שיף      אנגלית/שיף          מחשבים/אלבום         לשון/אונגר             דינים/ברון
            מדעים/הולס      דינים/ברון      מדעים/הולס        סטטיסטיקה/אלתר       מחשבים/אלבום             נביא/אונגר        
                                    הבעה/גומבו      מתמתיקה/לוי      הבעה/גומבו            דינים/ברון       היסטוריה/זקש
                                    דקדוק/כהן        דקדוק/כהן       דקדוק/כהן            הבעה/גומבו       היסטוריה/זקש
                                    דינים/ברון      מדעים/הולס       דינים/ברון           מדעים/הולס           דקדוק/כהן        
                                    סטטיסטיקה/אלתר



                                    
                                    
                                                          3כיתה ב
           
                ראשון           שני            שלישי                   רביעי              חמישי                שישי     

            מתמתיקה/לוי     הבעה/גומבו     מתמתיקה/לוי           יהדות/אונגר          הבעה/גומבו           יהדות/אונגר         
            אנגלית/שיף      אנגלית/שיף      אנגלית/שיף          מחשבים/אלבום         לשון/אונגר             דינים/ברון
            מדעים/הולס      דינים/ברון      מדעים/הולס        סטטיסטיקה/אלתר       מחשבים/אלבום             נביא/אונגר        
                                    הבעה/גומבו      מתמתיקה/לוי      הבעה/גומבו            דינים/ברון       היסטוריה/זקש
                                    דקדוק/כהן        דקדוק/כהן       דקדוק/כהן            הבעה/גומבו       היסטוריה/זקש
                                    דינים/ברון      מדעים/הולס       דינים/ברון           מדעים/הולס           דקדוק/כהן        
                                    סטטיסטיקה/אלתר
                                    