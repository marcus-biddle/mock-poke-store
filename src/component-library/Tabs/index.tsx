import React from "react";
import { ActiveTab, ButtonGroup, Tab } from "./styled";


export const Tabs = ({tabs, active, setActive}: any) => {
    return (
        <ButtonGroup>
            {tabs.map((tab: string) => {
                const tabProps = {
                    key: `tab-${tab}`,
                    activeTab: active === tab,
                    onClick: () => setActive(tab)
                };
                if (active === tab) {
                    return <ActiveTab {...tabProps}>{tab}</ActiveTab>
                }
                return <Tab {...tabProps}>{tab}</Tab>
                
            }) }
        </ButtonGroup>
    )
}