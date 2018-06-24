import React from "react";
import { shallow } from "enzyme";
import Display from "../components/Display";

describe("Display Unit test", () => {
  let wrapper = shallow(<Display />);
  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Matches the snapshot", () => {
    expect(wrapper.find(View)).to.have.length(2);
  });

  

});
