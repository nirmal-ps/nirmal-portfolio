import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import CustomSider from "./sider";
const AppLayout = () => (
  <Layout hasSider>
    <CustomSider />
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: "center",
          }}
        >
          <p>long content</p>
          {
            // indicates very long content
            Array.from(
              {
                length: 100,
              },
              (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              )
            )
          }
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default AppLayout;
