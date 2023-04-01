import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { Routes, Route, useParams } from 'react-router-dom'

export default function ExhibitionPage() {
  const exhibition = {
    _id: {
      $oid: "6425c260c9d195369ec02476",
    },
    artworks: [
      {
        $oid: "6415326a1fdaed807a26dd2e",
      },
      {
        $oid: "6425ba0ac9d195369ec02461",
      },
      {
        $oid: "6425bfb3c9d195369ec02471",
      },
      {
        $oid: "6425c0a3c9d195369ec02472",
      },
      {
        $oid: "6425c122c9d195369ec02473",
      },
      {
        $oid: "6425c1b4c9d195369ec02474",
      },
    ],
    exhibitionComments: [""],
    exhibitionEndDate: "16-3-2023",
    exhibitionEntry: "General Admission",
    exhibitionInformation:
      'Starting in the mid-19th century, the exhibition navigates the art history of Southeast Asia as one that is characterised by a continuous encounter with the new as the region’s artists negotiated the meaning of art and sought to reinvent vernacular expressions and aesthetics.\n\nPresented in a largely chronological sequence and punctuated by key turning points in artistic sensibilities, the exhibition also identifies how art is inseparably linked to the region’s tumultuous social and political history.\n\nThe title of the exhibition, Between Declarations and Dreams, is credited to one of Indonesia’s most cherished poets, Chairil Anwar. In his poem of 1948, "Krawang-Bekasi”, Chairil Anwar laments the massacre of villagers in West Java by the Dutch colonial forces, giving vent to the desire for national independence at the time. This line may also be said to encapsulate the experiences of many artists in the region, caught as they are between declarations and dreams, the personal and the political.\n\nThe curatorial narrative explores four main themes places in a broadly chronological sequence, each one critically examining the shared artistic impulse of the region for each period: Authority and Anxiety, Imagining Country and Self, Manifesting the Nation, and Re:Defining Art.',
    exhibitionStartDate: "12-4-2022",
    exhibitionTitle: "Between Declarations and Dreams",
    exhibitionTitleSub: "Art of Southeast Asia since the 19th Century",
  };

  //   if (!exhibition) {
  //     return (
  //     <>
  //     <p>No Exhibition Available yet</p>
  //     </>
  //   )} else {

  return (
    <CardContent>
      <Typography>{exhibition.exhibitionTitle}</Typography>
      <CardMedia
        component="img"
        height="194"
        image="https://www.nationalgallery.sg/sites/default/files/ng-journeys-img-01.jpg"
        alt={exhibition.exhibitionTitle}
      />
      <Typography variant="h5" component="h2">
      {exhibition.exhibitionTitle}
      </Typography>
      <button>Edit</button>
      <button>Delete</button>
    </CardContent>
  );
}
