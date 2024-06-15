import autoBind from "auto-bind";

export class UsingAutoBind {
  constructor() {
    autoBind(this);
  }
}

const Test = () => {
  new UsingAutoBind();

  return <div>render Test</div>;
};

export default Test;
