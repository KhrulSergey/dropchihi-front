import React, {MouseEvent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import waveImg from '../../assets/landing/team.png';

interface ITeamMemberCard {
  name: string;
  description: string;
  logoPath?: 'bigMintStyle' | 'blackAndWhiteStyle';
}

const useStyles = makeStyles({
  root: {
    maxWidth: 371,
    maxHeight: 330,
    marginLeft: '5px',
    marginRight: '5px'
  },
  media: {
    height: '200px',
  }
});

export default function TeamMemberCard(props: ITeamMemberCard) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.logoPath ? props.logoPath : waveImg}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
