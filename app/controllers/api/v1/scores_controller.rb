class Api::V1::ScoresController < ApplicationController

  def index
    render json: Score.all
  end

end
