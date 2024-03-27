import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/User/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Societe} from "../../Model/Entity/societe";
import {RoleUser} from "../../Model/Enum/role-user";

@Component({
  selector: 'app-table-societe',
  templateUrl: './table-societe.component.html',
  styleUrls: ['./table-societe.component.css']
})
export class TableSocieteComponent  implements OnInit {
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.getAllSocietes();
  }

  formEditSociete: FormGroup = new FormGroup({
    id: new FormControl(0),
    email: new FormControl(''),
    password: new FormControl(''),
    image: new FormControl(''),
    nom: new FormControl('')
  });

  formAddSociete: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    image: new FormControl(''),
    nom: new FormControl('')
  });

  societes:Array<Societe> = []
  //@ts-ignore
  societe: Societe = {};
  getAllSocietes(){
    this.userService.getAllUsersByRoleUser(RoleUser.Societe).subscribe((data:any)=>{
      this.societes = data;
      console.log(data)
    })
  }

  editSociete(societe: Societe) {
    const editeSociete = document.getElementById('editeSociete');
    this.formEditSociete = new FormGroup({
      id: new FormControl(societe.id),
      email: new FormControl(societe.email),
      password: new FormControl(societe.password),
      image: new FormControl(societe.image),
      nom: new FormControl(societe.nom)
    });
    //@ts-ignore
    editeSociete.setAttribute('style', 'display: block !important');
  }
  updateSociete() {
    this.hideForm();
    this.userService.saveUser(this.formEditSociete.value,RoleUser.Societe).subscribe((data:any)=>{
      this.getAllSocietes();
    })
  }

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
        this.formAddSociete = new FormGroup({
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

  hideForm() {
    this.formAddSociete = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      image: new FormControl(''),
      nom: new FormControl('')
    })
    this.imgURL = false
    const editeSociete = document.getElementById('editeSociete');
    //@ts-ignore
    editeSociete.setAttribute('style', 'display: none !important');
    const addSociete = document.getElementById('addSociete');
    //@ts-ignore
    addSociete.setAttribute('style', 'display: none !important');
  }

  deleteSociete(societe: Societe) {
    this.userService.deleteUser(societe.id,RoleUser.Societe).subscribe((data:any)=>{
      this.getAllSocietes();
    })
  }

  addSociete() {
    const addSociete = document.getElementById('addSociete');
    //@ts-ignore
    addSociete.setAttribute('style', 'display: block !important');
  }

  AddSaveSociete() {

    this.formAddSociete = new FormGroup({
      email: new FormControl(this.formAddSociete.get('email')?.value),
      password: new FormControl(this.formAddSociete.get('password')?.value),
      image: new FormControl(this.imgURL),
      nom: new FormControl(this.formAddSociete.get('nom')?.value)
    })
    console.log(this.formAddSociete.value)
    this.userService.addUser(this.formAddSociete.value,RoleUser.Societe).subscribe((data:any)=>{
      this.getAllSocietes();
    })
    this.hideForm();
  }
}
