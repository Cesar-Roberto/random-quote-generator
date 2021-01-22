(ns random-quote.core
  (:require [ajax.core :refer [GET]]
            [reagent.core :as reagent :refer [atom]]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Welcome to my Random Quote Generator"
                          :author "by Cesar Roberto"}))

;; Function that calls the random quote app
(defn fetch-link! [state]
  ;; using the GET function from ajax.core
  (GET "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    ;; The data var has the map with the info of the quote
    {:handler (fn [data]
                (swap! state assoc :text (get (get (get data "data") 0) "quoteText"))
                (swap! state assoc :author (get (get (get data "data") 0) "quoteAuthor")))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

;; Links our quotes to twitter
(defn tweet-link [state]
  (str "https://twitter.com/intent/tweet?hashtags=quote&text=" (:text @state) " - " (:author @state)))

;; Some html in a weid way
(defn quote [state] 
  [:div
   [:h1 "Random Quote Generator by Cesar"]
   [:div.quote
    [:div.quote-container
     [:p.quote-content (:text @state)]
     [:p.quote-author (:author @state)]]
    
    [:div.quote-buttons
     [:a {:href (tweet-link state)
          :target "_blank"} "tweet"]
     [:button {:on-click #(fetch-link! state)} "next quote"]]]]
  )

(defn start []
  (reagent/render-component [quote app-state]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))

