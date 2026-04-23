import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {

  productId: number = 0;
  product: any;

  // Base de données simulée
  products = [
    { id: 1, name: 'Ordinateur Portable', price: 2500, description: 'PC haute performance', stock: 15 },
    { id: 2, name: 'Smartphone', price: 1200, description: 'Dernière génération', stock: 30 },
    { id: 3, name: 'Tablette', price: 800, description: 'Parfaite pour la lecture', stock: 20 },
    { id: 4, name: 'Écouteurs', price: 150, description: 'Son de qualité premium', stock: 50 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct();
  }

  loadProduct(): void {
    this.product = this.products.find(p => p.id === this.productId);

    if (!this.product) {
      this.router.navigate(['/404']);
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
