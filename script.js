


var p = document.querySelectorAll('.content h1')

var spaceContent = document.querySelectorAll('.content-space p')[0]

var smallSpace = document.querySelectorAll('.content-space p')[1]

p.forEach(a =>{
    a.addEventListener('click', ()=>{
       debugger
        let val = a.textContent

        let pList = a.classList

        let Flexibility = 'Our development team works onshore & offshore, depending on your requirements, to ensure cost-efficient and quality solutions. We are aimed at developing software that is suited to your needs in a timeframe that fits you the best way.'
        let TeamSupport = 'An entire team of business analysts, project managers, UI designers, developers, testers, deployment support is at your service at Intense – all at the cost of a single developer. Our dedicated team will also provide extensive support for you.'
        let Technology = 'Choose from our pool of experienced experts on diverse technologies such as Microsoft.NET, SharePoint, PHP, iOS, Android, Salesforce, and more. We are ready to work on a project of any complexity.        '
        let Satisfation = 'Our client portal transparently facilitates tracking of even the most minute task details and provides regular status updates. It helps our customers to stay in the know of how their project is developed and supported throughout its lifecycle.   '

        let FlexibilitySpace = 'Intense can easily adjust to your demands and requirements to deliver a great app for you.'

        let TeamSupportpace = 'Whatever software solution your company requires, you can always count on us.'

        let TechnologySpace = 'No matter what platform you use, we can develop an app for it.'

        let SatisfationSpace = '  We make every possible effort to deliver the utmost customer satisfaction.'

        if(a.textContent === 'Flexibility'){
            debugger
            spaceContent.textContent = ''
            spaceContent.textContent  = Flexibility
            smallSpace.textContent = ''
            smallSpace.textContent = FlexibilitySpace
        }else if(a.textContent === 'Team Support'){
            spaceContent.textContent = ''
            spaceContent.textContent  = TeamSupport
            smallSpace.textContent = '' 
            smallSpace.textContent = TeamSupportpace
           
        }else if(a.textContent === 'Technology'){
            spaceContent.textContent = ''
            spaceContent.textContent  = Technology
            smallSpace.textContent = '' 
            smallSpace.textContent = TechnologySpace
           
        }else{
            spaceContent.textContent = ''
            spaceContent.textContent  = Satisfation
            smallSpace.textContent = ''
            smallSpace.textContent = SatisfationSpace
            
        }

        
    })
})


var blinks = document.querySelectorAll('article')


blinks.forEach(blink =>{
    blink.addEventListener('mouseover', ()=>{

        debugger

        

        let d = blink.classList

        d.add('article-border')

        
        
    })
})

blinks.forEach(blink =>{
    blink.addEventListener('mouseout', ()=>{

        debugger

        let d = blink.classList

        d.remove('article-border')

        
        
    })
})


