'use strict';

const MENU = {
  GROUPS: 'groups',
  SERVERS: 'servers'
};

const GROUP = {
  VIEW_MORE: 'more',
  SOLMAN: 'servers',
  NETWEAVER: 'netweaver',
  HANA: 'hana',
  MOBILITY: 'mobility',
  ECC: 'ecc'
};

function getServerGroupsListElements(allList) {
  const elements = [
    {
      title: 'Solution Manager',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.SOLMAN
        })
      }]
    },
    {
      title: 'SAP NetWeaver',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.NETWEAVER
        })
      }]
    },
    {
      title: 'HANA Native',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.HANA
        })
      }]
    },
    {
      title: 'SAP Mobility',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.MOBILITY
        })
      }]
    },
    {
      title: 'SAP Business Suite',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.ECC
        })
      }]
    }
  ];

  if (!allList) {
    for (let i = 0; i < 3; i++) {
      elements.pop();
    }
  }

  return elements;
}


function getServersListElements(group) {
  const elements = [
    {
      title: 'ABC',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.SOLMAN
        })
      }]
    },
    {
      title: 'POI',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.NETWEAVER
        })
      }]
    },
    {
      title: 'LALALA',
      subtitle: 'See all servers',
      buttons: [{
        type: 'postback',
        title: 'Select group',
        payload: JSON.stringify({
          menu: MENU.GROUPS,
          group: GROUP.ECC
        })
      }]
    }
  ];

  return elements;
}

module.exports = {
  getServerGroupsListElements,
  getServersListElements,
  CONSTANTS: {
    MENU,
    GROUP
  }
};
