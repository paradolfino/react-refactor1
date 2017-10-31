class Jumbo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id='jumbo'>
        <div>
          <h1>{this.props.header}</h1>
          <p>{this.props.sub}</p>
        </div>
      </div>
    );
  }
}

export default Jumbo;