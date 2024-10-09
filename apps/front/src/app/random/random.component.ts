import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Set } from "@scholarsome/shared";
import { SetsService } from "../shared/http/sets.service";
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: "scholarsome-random",
  templateUrl: "./random.component.html",
  styleUrls: ["./random.component.scss"]
})

export class RandomComponent implements OnInit {
  constructor(
    private readonly setsService: SetsService,
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {
    this.titleService.setTitle("Studying done the correct way — Scholarsome");
    this.metaService.addTag({ name: "description", content: "Scholarsome is the way studying was meant to be. No monthly fees or upsells to get between you and your study tools. Just flashcards." });
  }
  protected set: Set | null;


  async ngOnInit(): Promise<void> {
    this.set = await this.setsService.randomSet();
    if (this.set) {
      window.location.href = `${process.env["API_VIEW"]}/${this.set.id}`;
    }
  }
}
