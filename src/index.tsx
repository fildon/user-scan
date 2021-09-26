import { h, render } from "preact";
import { ClientJS } from "clientjs";

const ClientScan = () => {
  const clientJs = new ClientJS();

  return (
    <table>
      <tr>
        <td>Your Browser:</td>
        <td>{`${clientJs.getBrowser()} version: ${clientJs.getBrowserMajorVersion()}`}</td>
      </tr>
      <tr>
        <td>Your Operating System:</td>
        <td>{`${clientJs.getOS()} version: ${clientJs.getOSVersion()}`}</td>
      </tr>
      <tr>
        <td>Resolution:</td>
        <td>{`available: ${clientJs.getAvailableResolution()} of total: ${clientJs.getCurrentResolution()}`}</td>
      </tr>
      <tr>
        <td>Time zone:</td>
        <td>{clientJs.getTimeZone()}</td>
      </tr>
      <tr>
        <td>Language:</td>
        <td>{clientJs.getLanguage()}</td>
      </tr>
    </table>
  );
};

const appElement = document.getElementById("app");

if (appElement) {
  render(<ClientScan />, appElement);
} else {
  throw new Error("Could not find HTML element with ID: app");
}
