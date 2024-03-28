import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Batterie} from "../../Model/Entity/batterie";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {AchatStatus} from "../../Model/Enum/achat-status";
import {RoleUser} from "../../Model/Enum/role-user";
import {StatusBattery} from "../../Model/Enum/status-battery";

@Component({
  selector: 'app-tabel-batterie',
  templateUrl: './tabel-batterie.component.html',
  styleUrls: ['./tabel-batterie.component.css']
})
export class TabelBatterieComponent{
  userFile : any;
  imgURL:any
  imagePath: any;
  onImageSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.userFile = file

      var mimeType = event.target.files[0].type
      if (mimeType.match(/image\/*/) == null) {
        alert("Only images are supported")
        this.formAddBatterie = new FormGroup({
          image: new FormControl('')
        })
        this.formEditBatterie = new FormGroup({
          image: new FormControl('')
        })
        this.imgURL = false
        return
      }

      var reader = new FileReader()

      this.imagePath = file
      reader.readAsDataURL(file)
      reader.onload = (_event) => {
        this.imgURL = reader.result
      }
    }
  }
  constructor(private batterieService:BatterieService) { }

  formEditBatterie: FormGroup = new FormGroup({
    id: new FormControl(0),
    nom: new FormControl(''),
    image: new FormControl(''),
    prix: new FormControl(0),
    vis: new FormControl('')
  });

  formAddBatterie: FormGroup = new FormGroup({
    nom: new FormControl(''),
    image: new FormControl(''),
    prix: new FormControl(0),
    vis: new FormControl('')
  });

  @Input() typeTable:string = ''

  @Input() batteries:Array<any> = []
  batterieAdd : any = {
    nom:'',
    image:'',
    prix:0,
    vis:'',
    achatStatus:AchatStatus.NotPayed,
    agent:{
      // @ts-ignore
      id:<number>localStorage.getItem('idUser')
    }
  }
  batterieEdite:Batterie = {
    id:0,
    nom:'',
    image:'',
    prix:0,
    vis:'',
    achatStatus:AchatStatus.NotPayed,
    agent:{
      // @ts-ignore
      id:<number>localStorage.getItem('idUser')
    }
  }

  editBatterie(batterie: Batterie) {
    const editeBatterie = document.getElementById('editeBatterie');
    this.formEditBatterie = new FormGroup({
      id: new FormControl(batterie.id),
      nom: new FormControl(batterie.nom),
      image: new FormControl(batterie.image),
      prix: new FormControl(batterie.prix),
      vis: new FormControl(batterie.vis)
    });
    //@ts-ignore
    editeBatterie.setAttribute('style', 'display: block !important');
  }
  updateBatterie() {
    this.batterieEdite.id = this.formEditBatterie.get('id')?.value
    this.batterieEdite.nom = this.formEditBatterie.get('nom')?.value
    console.log(this.imgURL, this.formEditBatterie.get('image')?.value)
    if (this.imgURL == undefined) {
      this.batterieEdite.image = this.formEditBatterie.get('image')?.value
    }else {
      this.batterieEdite.image = this.imgURL
    }
    this.batterieEdite.prix = this.formEditBatterie.get('prix')?.value
    this.batterieEdite.vis = this.formEditBatterie.get('vis')?.value

    this.batterieService.updateBatterie(this.batterieEdite).subscribe((data:any)=>{
      console.log(data)
    })
    this.hideForm();
  }

  hideForm() {
    this.formAddBatterie = new FormGroup({
      nom: new FormControl(''),
      image: new FormControl(''),
      prix: new FormControl(0),
      vis: new FormControl('')
    })
    this.formEditBatterie = new FormGroup({
      id: new FormControl(0),
      nom: new FormControl(''),
      image: new FormControl(''),
      prix: new FormControl(0),
      vis: new FormControl('')
    });

    this.imgURL = false

    const editeBatterie = document.getElementById('editeBatterie');
    //@ts-ignore
    editeBatterie.setAttribute('style', 'display: none !important');
    const addBatterie = document.getElementById('addBatterie');
    //@ts-ignore
    addBatterie.setAttribute('style', 'display: none !important');
    window.location.reload();
  }

  deleteBatterie(batterie: Batterie) {
    this.batterieService.deleteBatterie(batterie.id).subscribe((data:any)=>{
      console.log(data)
    })
  }

  addBatterie() {
    const addBatterie = document.getElementById('addBatterie');
    //@ts-ignore
    addBatterie.setAttribute('style', 'display: block !important');
  }

  AddSaveBatterie() {
    this.batterieAdd.image = this.imgURL
    this.batterieAdd.nom = this.formAddBatterie.get('nom')?.value
    this.batterieAdd.prix = this.formAddBatterie.get('prix')?.value
    this.batterieAdd.vis = this.formAddBatterie.get('vis')?.value

    this.batterieService.saveBatterie(this.batterieAdd).subscribe((data:any)=>{
      console.log(data)
    })
    this.hideForm();
  }

  protected readonly AchatStatus = AchatStatus;
  protected readonly RoleUser = RoleUser;
  protected readonly StatusBattery = StatusBattery;
  protected readonly window = window;
}
