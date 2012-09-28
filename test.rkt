#lang racket

(require "lv-js.rkt"
         "cm-ext-transform.rkt")

;(lv->js (init (transform '(zero? (pred 2) 5 9))))

;(lv->js (init (transform '(pred 1))))

;(lv->js (init (transform '((λ (z) (pred 1)) 7))))

#;(lv->js (init (transform '((zero? 0 (λ (x) 1) (λ (x) 2)) 5))))

#;(lv->js (init (transform '((zero? 0
                                    (λ (z) 1)
                                    (λ (z) (* n (f (pred n))))) 0))))

#;(lv->js (init (transform '((λ (n)
                               ((((zero? n)
                                  (λ (z) 1))
                                 (λ (z) (* n (f (pred n))))) 0)) 0))))

#;(lv->js (init (transform '(((λ (f)
                                (λ (n)
                                  ((((zero? n)
                                     (λ (z) 1))
                                    (λ (z) (* n (f (pred n))))) 0))) (λ (x) x)) 0))))

#;(lv->js (init (transform '(((λ (f)
                              ((λ (x) (f (λ (v) ((x x) v))))
                               (λ (x) (f (λ (v) ((x x) v))))))
                            (λ (f)
                              (λ (n)
                                ((zero? n
                                        (λ (z) (print-list (ccm) 1))
                                        (λ (z) (wcm n (* n (f (pred n)))))) 0)))) 5))))

