import React, { useEffect, useState } from "react"
import { Grid, Card, CardMedia, Typography, CardContent, IconButton} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import axios from "axios"

const FetchData = () => {
    const [propertyData, setPropertyData] = useState([])
    const [favorited, setFavorited] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:5000/')
            setPropertyData(response.data.payload)
        }
        
        getData()
    }, [])

    const handleOnClick = (id) => {
        let result = favorited.includes(id) ? favorited.filter(favorite => favorite !== id): [...favorited, id]
        setFavorited(result)
        const favoritedToDB = {
            name: propertyData[id].name,
            image: propertyData[id].images[0].url,
            fav: favorited.includes(id) ? false : true
        }
        // console.log(favoritedToDB)
        axios.post('http://localhost:5000/', favoritedToDB)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div>
            <Grid container spacing={3} style={{ padding: "20px"}}>
                {propertyData.map((property, index) => {
                    return (    
                        <Grid key={index} item xs={2} md={6} lg={4}>
                            <Card>
                                <CardMedia image={property.images[0].url} style={{ width: "250px", height: "150px", margin: "auto", padding: "90px" }} />
                                <CardContent style={{display: "flex", justifyContent: "space-between"}}>
                                    <Typography style={{fontSize: "25px"}}><b>{property.name}</b></Typography>
                                    <IconButton onClick={() => handleOnClick(index)}>
                                        {favorited.includes(index) ? <StarIcon /> : <StarBorderIcon />}
                                    </IconButton>
                                </CardContent>              
                            </Card>
                        </Grid>
                    )    
                })}
            </Grid>
        </div>
    )
}

export default FetchData
