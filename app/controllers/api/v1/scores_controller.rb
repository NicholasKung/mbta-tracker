class Api::V1::ScoresController < ApplicationController

  def index
    render json: Score.all
  end

  def create
    score = Score.new(score_params)
    if score.save
      render json: { score: score }
    else
      render json: { error: score.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
