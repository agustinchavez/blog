class PagesController < ApplicationController

  def about
    render :layout => false
  end

  def me
    render :layout => false
  end

  def contactMe
    render :layout => false
  end

  def thank_you
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    ActionMailer::Base.mail(:from => @email,
        :to => 'chavez.agustin@outlook.com',
        :subject => "A new contact form message from #{@name}",
        :body => @message).deliver_now
  end

end
