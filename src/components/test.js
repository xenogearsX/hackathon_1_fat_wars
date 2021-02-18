const test = () => this.state.category ? (
  this.state.category === 0 ? 
       this.setState({ this.state.IMC0[this.getRandom(0, this.state.IMC0.length - 1)]})
   : this.state.category === 1 ? (
    this.setState({ this.state.IMC1[this.getRandom(0, this.state.IMC1.length - 1)]})
  ) : this.state.category === 2 ? (
    this.setState({ this.state.IMC2[this.getRandom(0, this.state.IMC2.length - 1)]})
  ) : this.state.category === 3 ? (
    this.setState({ this.state.IMC3[this.getRandom(0, this.state.IMC3.length - 1)]})
  ) : this.state.category === 4 ? (
    this.setState({ this.state.IMC4[this.getRandom(0, this.state.IMC4.length - 1)]})
  ) : (
    this.setState({ this.state.IMC5[this.getRandom(0, this.state.IMC5.length - 1)]})
  )
) : null