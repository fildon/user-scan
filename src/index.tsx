import { h, render } from "preact";
import { ClientJS } from "clientjs";
import { DataRow } from "./dataRow";

const ClientScan = () => {
  const clientJs = new ClientJS();

  return (
    <table>
      <DataRow>
        {"Operating System"}
        {() => clientJs.getOS()}
      </DataRow>
      <DataRow>
        {"Browser"}
        {() =>
          `${clientJs.getBrowser()} v: ${clientJs.getBrowserMajorVersion()}`
        }
      </DataRow>
      <DataRow>
        {"Resolution"}
        {() =>
          `available: ${clientJs.getAvailableResolution()} of total: ${clientJs.getCurrentResolution()}`
        }
      </DataRow>
      <DataRow>
        {"Time Zone"}
        {() => clientJs.getTimeZone()}
      </DataRow>
      <DataRow>
        {"Language"}
        {() => clientJs.getLanguage()}
      </DataRow>
    </table>
  );
};

const appElement = document.getElementById("app");

if (appElement) {
  render(<ClientScan />, appElement);
} else {
  throw new Error("Could not find HTML element with ID: app");
}
