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
    btn: {
      color: theme.palette.primary.contrastText,
      backgroundColor: '#3f51b5',
      '&:hover': {
        backgroundColor: '#2c387e'
      }
    },
    toolbar: {
      justifyContent: 'space-between'
    },
    btnGroup: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-around'
    },
    formEdit: {
      marginTop: '50px',
      padding: 50
    }
  }
}
