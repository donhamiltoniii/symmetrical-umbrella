import { RATING } from "../utils/constants";

interface Props {
  description: string;
  rating?: RATING;
  title: string;
}

export class Movie {
  private _description: string;
  private _rating: RATING;
  private _title: string;

  constructor({ description, rating = RATING.UNSET, title }: Props) {
    this._description = description;
    this._rating = rating;
    this._title = title;
  }

  public get description() {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get rating() {
    return this._rating;
  }

  public set rating(rating: RATING) {
    this._rating = rating;
  }

  public get title() {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }
}
