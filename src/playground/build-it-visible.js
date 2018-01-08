class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state={
            visibility: false
        };
    }
  
    handleToggleVisibility(){
    this.setState((prevState)=>{
    return{
        visibility: !prevState.visibility
    };
});
    }
 
      render(){
          return(
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details':'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                    <p>Hi, There are some details!</p>
                    </div>
                 )}               
            </div>
          );
      }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



/*
const render =() => {
    const template =(
        <div>
            <h1>Visibility Toggle</h1>
            {app.subtitle && <p>{app.subtitel}</p> }
            <p>{app.options.length>0 ? 'Here are details' : ''}</p>
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
*/