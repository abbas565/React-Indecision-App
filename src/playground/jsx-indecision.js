console.log('app.js is running!');

const app={
titel:'Indecision',
subtitel: 'This is a sample',
options:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();

    }
};



const user= {
name:'abbas',
age:67,
location:'vancouver'
};

function getLocation(location){
    if (location){
        return <p>location: {location}</p>;
    } 
}

const template2 =(
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p> }
        {getLocation(user.location)}
    </div>
);

//const temp= [template, template2];

const appRoot = document.getElementById('app');

const onRemoveAll = () => {
app.options=[];
render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert (option);
};

const render =() => {
    const template =(
        <div>
            <h1>{app.titel}</h1>
            {app.subtitle && <p>{app.subtitel}</p> }
            <p>{app.options.length>0 ? 'Here are your options' : 'No options'}</p>
           <button disabled={app.options.length===0} onClick={onMakeDecision}>What I should to do?</button>
           <button onClick={onRemoveAll}>Remove All</button>
           {
               
           }
            <ol>
                {
            app.options.map((option)=>{
                return <li key={option}>{option}</li>;
            })
               }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
