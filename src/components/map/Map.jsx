import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({items}){
  return (
    <MapContainer center={[50.443860, 30.514000]} zoom={14} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items && items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map