const cl= console.log;

const skillsArr=[
    {
        name : "Html",
        value : "90"
    },
    {
        name : "Css",
        value : "90"
    },
    {
        name : "JavaScript",
        value : "75"
    },
    {
        name : "Typescript",
        value : "80"
    },
    {
        name : "Angular",
        value : "90"
    },
    {
        name : "Bootstrap 4",
        value : "90"
    },
    {
        name : "Sass",
        value : "90"
    },
    {
        name : "RxJs",
        value : "70"
    },
    {
        name : "Angular Material",
        value : "70"
    },
    {
        name : "Flex",
        value : "90"
    }
]

const skillsSection = document.getElementById('skillSection');
let result = ""

skillsArr.forEach(function(ele ) {
        result += `
        <div class="skillSection">
            <div class="skillSet">
                <h3 class="SkillName">
                    ${ele.name}
                </h3>
                <div class="progress" style="height: 12px;">
                    <div class="progress-bar" role="progressbar" style="width: ${ele.value}%" aria-valuenow="${ele.value}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span class="skillvalue">${ele.value}%</span>
            </div>
        </div>
        `
    })
    skillsSection.innerHTML = result



    const educArray = [
        {
            name : "Master",
            courseName : "M sc(Microbiology)",
            clgName : "Netaji Subhashchandra Bose college nanded",
            university : "S R T M university vishnupuri, nanded"
        },
        {
            name : "Graduation",
            courseName : "B sc(Science)",
            clgName : "digambarrao bindu art & commerce college, bhokar",
            university : "S R T M university vishnupuri, nanded"
        }
    ]

const edSection = document.getElementById("edSections")
let results = "";

educArray.forEach(function(str){
    results += `
        <div class="eDetails">
            <div class="row my-3">
                <div class="col-md-3">
                    <div class="gradDetails">
                        <h3>${str.name}</h3>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="gDetails">
                        <h3>${str.courseName}</h3>
                        <h3>${str.clgName}</h3>
                        <h3>${str.university}</h3>
                    </div>
                </div>
            </div>
        </div>
    `
})
edSection.innerHTML = results