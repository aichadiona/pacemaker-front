import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
// import { Chart, CategoryScale, BarController, LinearScale } from 'chart.js';
import { Chart } from 'chart.js/auto';
import * as L from 'leaflet';
import { LatLngExpression } from 'leaflet';


@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class TableauDeBordComponent implements OnInit {
  numberOfPatients!: number;
  countries: string[] = [];
  patientCounts: number[] = [];
  map: any;
  patientData!: any[];
  
  // heartIcon= faHeartbeat;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  gradient = false;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getCountriesOfImplantation().subscribe(countries => {
      this.countries = countries;
      this.patientService.getPatientCountsByCountry().subscribe(counts => {
        this.patientCounts = counts;
        this.createChart();

      });
    });
    this.createMap();
    this.patientService.getNumberOfPatients().subscribe(count => {
      this.numberOfPatients = count;
    });
    
    
  }

createMap(){
  this.map = L.map('map').setView([5, 15], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom:18
  }).addTo(this.map);

  // Utilisez les coordonnées pour centrer la carte sur l'Afrique
  this.map.fitBounds([
    [20, -20], // Coin sud-ouest de l'Afrique du Nord
    [40, 40]   // Coin nord-est de l'Afrique du Nord
  ]);

 
  const markerColors = ['red', 'blue', 'green']; // Liste des couleurs pour les marqueurs (à adapter selon vos besoins)

  this.patientService.getCountriesOfImplantation().subscribe((countries: string[]) => {
    countries.forEach((country: string, index: number) => {
      // Récupérez les coordonnées du pays (vous devez implémenter cette fonctionnalité)
      const coordinates = this.getCoordinatesByCountry(country);

      if (coordinates) {
        const marker = L.marker(coordinates, { icon: this.createMarkerIcon(markerColors[index]) }).addTo(this.map);
        marker.bindTooltip(country, { permanent: true, direction: 'right' });
      }
    });
  });
}

createMarkerIcon(color: string): L.Icon {
  return L.icon({
    iconUrl: 'assets/img/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
}

getCoordinatesByCountry(country: string): LatLngExpression | null {
  switch (country) {
    case 'France':
      return [46.603354, 1.888334];
    case 'United States':
      return [37.09024, -95.712891];
    case 'Australia':
      return [-25.274398, 133.775136];
    case 'Canada':
      return [56.130366, -106.346771];
    case 'South Africa':
      return [-30.559482, 22.937506];
    case 'Brazil':
      return [-14.235004, -51.92528];
    // Ajoutez des cas pour les autres pays
    default:
      return null;
  }
}

  createChart() {
    const canvas = document.getElementById('chartCanvas') as HTMLCanvasElement;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.countries,
        datasets: [{
          label: 'Nombre de patients implantés pour chaque pays',
          data: this.patientCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }
}
