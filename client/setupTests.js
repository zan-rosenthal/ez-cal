/* eslint-env node, jest */
import "babel-polyfill";
import "./testConfig/requestAnimationFrameShim";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

Object.defineProperty(global.window.location, "protocol", {
  writable: true,
  value: "https:"
});

beforeEach(() => {
  jest.spyOn(global.console, "warn");
  jest.spyOn(global.console, "error");
});

afterEach(() => {
  expect(console.warn).not.toBeCalled(); //eslint-disable-line
  expect(console.error).not.toBeCalled(); //eslint-disable-line
});
