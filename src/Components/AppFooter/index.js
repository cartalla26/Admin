import { Typography } from "antd";
import "./footer.css";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://www.facebook.com/nanayestrellasresturant/">Facebook Page</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
