import { useState } from "react";
import { TabsContainer, TabButton } from "./styles";
import { ITabsProps } from "./types";

const Tabs = ({ tabs, defaultActiveIndex = 0, onTabChange }: ITabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };

  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          $isActive={activeIndex === index}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
