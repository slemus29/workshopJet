import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/Favorite';

const Post = ({
    title,
    description,
    favorite,
    index,
    onClick,
}) => {
    const handleClick = () => {
        onClick(index)
    }
    return(
        <Card>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                {description}
            </Typography>
            <Button onClick={handleClick}>Delete</Button>
            {favorite && <MoreVertIcon />} 
            </CardContent>
        </Card>
    )
}

Post.prototype = {
    title: String,
    description: String,
    favorite: Boolean,
}

export default Post;