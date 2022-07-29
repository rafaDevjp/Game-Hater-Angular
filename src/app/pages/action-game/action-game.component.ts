import { Games, ItensGenres, ItensPlatForms} from './../../shared/models/games';
import { GameService } from './../../core/services/game.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';





@Component({
	selector: 'app-action-game',
	templateUrl: './action-game.component.html',
	styleUrls: ['./action-game.component.scss']
})
export class ActionGameComponent implements OnInit {
	genresEnum = ItensGenres; //ENUM
	platformEnun = ItensPlatForms; //ENUM
	keys: any;
	platformkeys: any;
	game: Games;
	createForm: FormGroup;
	isAddMode: boolean = false;
	disabled: boolean =true
	isError: any;
	

	constructor(
		private fb: FormBuilder,
		private gameService: GameService,
		private route: Router,
		private actvate: ActivatedRoute
	) {

		//inicia valores do enum para select 
		this.keys = Object.keys(this.genresEnum).filter(Number)
		// console.log( 'KEys', this.keys )

		this.platformkeys = Object.keys(this.platformEnun).filter(Number)
		// console.log( 'platformkeys', this.platformkeys )
	}

	ngOnInit() {
		const id: any = this.actvate.snapshot.paramMap.get('_id')
		this.isAddMode =  id !== null;
		console.log(this.isAddMode);
		
		this.createForm = this.fb.group({
			_id: id,
			title: ['', Validators.required, ],
			description: ['', Validators.required],
			genres: [[], Validators.required],
			platforms: [[], Validators.required],
			rating: ['', Validators.required],
			totalVotes: ['', Validators.required],
			createdAt: ['', Validators.required],
			mediumPrice: ['', Validators.required],
			releaseYear: ['', Validators.required],
			videos: [{name: 'main',  url: ''}],
			// photos: this.fb.group({
			// 	name: 'main',
			// 	url: ['']
			// }),
			//
			photos: this.fb.array([
					this.fb.group({
							name: 'main',
							url: ''
					}),
			]),
			//
			tags: this.fb.array([
				this.fb.control('')
			]),
		})

		if (id && id !== null) {
			console.log('Formulario de UPDATE', id);
			this.gameService.getGameId(id).pipe(first()).subscribe({
				next: res => {
					this.game = res.game
					
					// Carregando capos simples do formulário
					// this.createForm.patchValue(res.game)
	
					// Carregando Arrays com valores de ENUM 
					this.createForm.patchValue({
						title: this.game.title,
						description: this.game.description,
						platforms: this.game.platforms, 
						genres: this.game.genres,
						rating: this.game.rating,
						totalVotes: this.game.totalVotes,
						createdAt: this.game.createdAt,
						mediumPrice: this.game.mediumPrice,
						releaseYear: this.game.releaseYear,
					});
	
					// Carregando os campos dinâmicos do FormArray
					this.createForm.setControl('tags', this.fb.array(this.game.tags || []));
					// this.createForm.setControl('', this.fb.array(this.game.photos || []));
					console.log(this.game);
				},
				error: (err) => {
					console.log(err);
					throw this.isError = ' Data is not Found ID references:  ' + id; 
				},
				complete: () => {console.info('complete')}
			}

		);
		}
	}
	//ARRAY PHOTOS METHODS
	get photos() {
		return this.createForm.get('photos') as FormArray;
	  }
	
	  addPhotos() {
		this.photos.push( this.fb.group({name: 'main', url: this.fb.control('')}));
	}

	//ARRAY TAGS METHODS  
	get tags() {
		return this.createForm.get('tags') as FormArray;
	}

	addTags() {
		this.tags.push(this.fb.control(''));
	}

	// Função de salvar o formulário
	onSaveGame() {
		const game = this.createForm.value;
		if (!game._id) {
			this.gameService.createGame(game).subscribe(() => {
			    this.revoke()
				console.log('Novo Game Criade');
				
			})
		} else {
			this.gameService.updateGame(game).subscribe(() => {
				this.revoke()
				console.log('Game Atualizado');
			})
		}
		console.warn(game);

	}

	revoke() {
		setTimeout(() => {
			this.createForm.reset()
			this.route.navigate(['/'])
		}, 1000);
	}

	//Compara o valor e seleciona os optios referente ao valor comparado dentro dos SELECTS
	compararSelectOptions(c1: any, c2: any): boolean {
		return c1 && c2 ? c1.id === c2.id : c1 === c2;
	}




}
