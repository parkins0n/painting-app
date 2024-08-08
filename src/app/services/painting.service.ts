import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Painting } from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private paintings: Painting[] = [
    { 
      id: 1, 
      title: 
      'Starry Night', 
      year: 1889, 
      artist: 'Vincent van Gogh', 
      dimensions: '73.7 cm × 92.1 cm', 
      location: 'Museum of Modern Art, New York' 
    },
    { 
      id: 2, 
      title: 'Mona Lisa', 
      year: 1503, 
      artist: 'Leonardo da Vinci', 
      dimensions: '77 cm × 53 cm', 
      location: 'Louvre Museum, Paris',
    },
  ];

  getPaintings(): Observable<Painting[]> {
    return of(this.paintings);
  }

  getPainting(id: number): Observable<Painting | undefined> {
    return of(this.paintings.find(painting => painting.id === id));
  }
}
