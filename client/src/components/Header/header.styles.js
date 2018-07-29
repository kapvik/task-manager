export default function styles(theme) {
  return {
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - 240px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    appBarShiftLeft: {
      marginLeft: 240
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: 'none'
    },
    menuItem: {
      textDecoration: 'none'
    },
    topMenu: {
      justifyContent: 'space-between'
    },
    leftMenuGroup: {
      display: 'flex',
      alignItems: 'center'
    },
    userBtn: {
      color: '#fff'
    }
  }
}
