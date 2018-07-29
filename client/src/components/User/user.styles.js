export default function styles(theme) {
  return {
    listSkills: {
      display: 'flex',
      flexDirection: 'column'
    },
    listSkillsItem: {
      textAlign: 'justify',
      paddingTop: 0
    },
    listTitle: {
      marginTop: '1em',
      fontSize: '1.5em',
      textTransform: 'uppercase'
    },
    topListInfo: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      margin: '30px auto'
    },
    subTitle: {
      color: theme.palette.primary.main
    },
    userInfoBlock: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    button: {
      margin: theme.spacing.unit
    },
    editBtn: {
      color: theme.palette.primary.contrastText,
      position: 'absolute',
      right: '5%',
      top: 0
    },
    homeBtn: {
      color: theme.palette.primary.contrastText
    },
    btnLink: {
      position: 'absolute',
      right: '1%'
    }
  }
}
