import React from "react";
import renderer from "react-test-renderer";

import Counter from "../../../components/counter/counter";

describe("<Count />", () => {
  it("count is alive", () => {
    let component = shallow(<Counter />);
    expect(component.find("span").exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Count />", () => {
  it("up clicker is alive", () => {
    let component = shallow(<Counter />);
    expect(component.find("a.up.clicker").exists()).toBeTruthy();
  });

  it("changes state on a click to increment ", () => {
    let component = mount(<Counter />);
    let anchor = component.find("a.up.clicker");
    anchor.simulate("click");
    expect(component.state("count")).toBe(1);
    expect(component.find("span").text()).toContain(1);
  });
});

describe("<Count />", () => {
  it("down clicker is alive", () => {
    let component = shallow(<Counter />);
    expect(component.find("a.down.clicker").exists()).toBeTruthy();
  });
  it("changes state on a click to decrement ", () => {
    let component = mount(<Counter />);
    let anchor = component.find("a.down.clicker");
    anchor.simulate("click");
    expect(component.state("count")).toBe(-1);
    expect(component.find("span").text()).toContain(-1);
  });
});
