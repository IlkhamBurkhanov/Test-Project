import React, { useState } from "react";
import { Drawer, Button } from "antd";

const MyDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Drawer'ni ochish
      </Button>
      <Drawer
        title="Drawer Sarlavhasi" // Roof
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="right"
      >
        {/* Tarkib */}
        <p>Bu Drawer ichidagi ba'zi tarkib.</p>
        <p>Bu yerda ko'proq tarkib bo'lishi mumkin.</p>
      </Drawer>
    </>
  );
};

export default MyDrawer;
