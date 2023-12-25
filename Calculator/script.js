equal =>{
    const answer = eval(this.StaticRange.calcMemory);
    this.state.answer = answer;
    this.setState({
        calcMemory: "= " + Math.round(answer),
        calcInput: "" 
    });}