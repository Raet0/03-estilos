import { Component } from '@angular/core';
import { Drawer } from "./components/drawer/drawer";
import { Footer } from "./components/footer/footer";
import { CodigoSimulado } from "./components/codigoSimulado/codigoSimulado";
import { ComponenteMovil } from "./components/componenteMovil/componenteMovil";
import { TablaTargeta } from "./components/tablaTargeta/tablaTargeta";
import { Card } from "./components/card/card";
import { CardD } from "./components/cardD/cardD";
import { TableTolist } from "./components/table-tolist/table-tolist";

@Component({
  selector: 'app-daisyui-page',
  imports: [Drawer, Footer, CodigoSimulado, ComponenteMovil, TablaTargeta, Card, CardD, TableTolist],
  templateUrl: './daisyui-page.html',
  styleUrl: './daisyui-page.css',
})
export class DaisyuiPage {

}
